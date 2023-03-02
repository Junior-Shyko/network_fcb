import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

function ListUsersLikes(props) {

    return (
        <>
         {
            props.post.data.map( ( el, i) => {
                return (
                    <ListItem disablePadding key={i}>
                        <ListItemButton>
                            <ListItemText primary={el.attributes.username} />
                        </ListItemButton>
                    </ListItem>
                )
            })
         }
        </>
    )
}

export default ListUsersLikes;
