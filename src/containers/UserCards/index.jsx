import React from "react";
import { CardMedia, Grid } from "@mui/material";
import PrincipalInformation from "../../components/PrincipalInformation";
import { Description } from "../../containers/Description"


const UserCards = (props)=>{
    const {userState}=props;
    const {avatar_url}=userState;

    return(
        <Grid container spacing={2} >
            <Grid item xs={3}>
                <CardMedia 
                    component="img"
                    alt="GitHub User"
                    image={avatar_url}
                    sx={{width:1/2}}
                />
            </Grid>
            <Grid item xs={6}>
                <PrincipalInformation userState={userState}/>
            </Grid>
            <Description userState={userState}></Description>
        </Grid>
    )
}

export default UserCards