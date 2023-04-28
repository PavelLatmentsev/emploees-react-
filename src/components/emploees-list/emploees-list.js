import "./emploees-list.css"
import EmploeesListItem from "../emploees-list-item/emploees-lits-item";
const EmploeesList = ({ data, onDelete, onToogleProp }) => {

    return (
        <ul className="app-list list-group">
            {data.map(item => {
                return <EmploeesListItem name={item.name}
                    salary={item.salary}
                    key={item.id}
                    increase={item.increase}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToogleProp={(e) => onToogleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}

                />


            })}

        </ul>
    );
}

export default EmploeesList;