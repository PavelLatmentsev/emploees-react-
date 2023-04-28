import { Component } from "react";
import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import EmploeesList from "../emploees-list/emploees-list";
import EmployeesAddForm from "../emploees-add-form/emploees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Alex", salary: 800, increase: true, id: 1, like: false },
                { name: "John", salary: 5000, increase: true, id: 2, like: false },
                { name: "Carl", salary: 3000, increase: true, id: 3, like: false }
            ]
        }
    }
    deleteItem = (id) => {

        this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))
        // this.setState(({ data }) => {
        //     const index = data.findIndex(item => item.id === id);
        //     const before = data.slice(0, index);
        //     const after = data.slice(index + 1);

        //     const newArr = [...before, ...after]
        //     return {
        //         data:newArr
        //     }
        // })
    }

    addNewPerson = (newData) => {

        this.setState(({ data }) => ({ data: [...data, newData] }))

    }

    // onToogleIncrease = (id) => {
    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(item => item.id === id);
    //     //     const old = data[index];
    //     //     const newItem = { ...old, increase: !old.increase };
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })

    //     // this.setState(({ data }) => ({
    //     //     data: data.map(item => {
    //     //         if (item.id === id) {
    //     //             return { ...item, rise: !item.increase }
    //     //         }
    //     //         return item;
    //     //     })
    //     // }))
    // }
    onToogleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo emploees={emploees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />

                </div>
                <EmploeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToogleProp={this.onToogleProp}

                />
                <EmployeesAddForm addNewPerson={this.addNewPerson} />
            </div>
        )
    }
}

export default App;