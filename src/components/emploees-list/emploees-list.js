import "./emploees-list.css"
import EmploeesListItem from "../emploees-list-item/emploees-lits-item";
const EmploeesList = ({ data }) => {
    console.log(data)
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                return <EmploeesListItem name={item.name} salary={item.salary} key={item.name + "1"} increase={item.increase} />

            })}

        </ul>
    );
}

export default EmploeesList;