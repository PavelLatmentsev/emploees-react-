import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import EmploeesList from "../emploees-list/emploees-list";
import EmployeesAddForm from "../emploees-add-form/emploees-add-form";
function App() {
    const data = [
        { name: "Alex", salary: 800, increase: true },
        { name: "John", salary: 5000, increase: true },
        { name: "Carl", salary: 3000, increase: true }
    ]
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />

            </div>
            <EmploeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;