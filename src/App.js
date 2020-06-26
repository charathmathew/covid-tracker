import React from 'react'
import styles from './App.module.css'
import {
    Cards, Chart, CountryPicker
} from './components'
import {fetchData} from './api'


class App extends React.Component{

    state = {
        data: {},
        country: ''
    }

    handleCountryChange = async (country) => {
        const dataFromApi = await fetchData(country)
        this.setState({data: dataFromApi, country: country})
    }

    async componentDidMount(){
        const dataFromApi = await fetchData()
        this.setState({data: dataFromApi})
    }

    render(){
        const { data, country } = this.state

        return(
            <div className={styles.container}>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}

export default App