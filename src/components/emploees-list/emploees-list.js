import "./emploees-list.css"
import EmploeesListItem from "../emploees-list-item/emploees-lits-item";
const EmploeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmploeesListItem />
            <EmploeesListItem />
            <EmploeesListItem />
        </ul>
    );
}

export default EmploeesList;