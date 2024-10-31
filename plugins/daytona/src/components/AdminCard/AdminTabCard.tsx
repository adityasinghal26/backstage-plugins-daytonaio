import React from 'react';
import { Card, CardHeader, CardContent, Divider, makeStyles, Theme } from '@material-ui/core';
import { configApiRef, useApi } from "@backstage/core-plugin-api";

type AdminTabCardProps = {

    // The name of the card
    name: string;

    // The description of the card
    desc: string;

    // The redirect path of the card
    // defaults to /
    path?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[4],
            backgroundColor: theme.palette.action.hover,
        },
    },
}));

const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export const AdminTabCard = ({name, desc, path}: AdminTabCardProps) => {
    const classes = useStyles();
    const config = useApi(configApiRef);
    const daytonaHost = config.getString('daytona.domain');
    const redirectUrl = path ? `https://admin.${daytonaHost}/${path}`: `https://admin.${daytonaHost}`

    return (
        <Card className={classes.card} onClick={() => openInNewTab(`${redirectUrl}`)}>
            <CardHeader title={name} />
            <Divider/>
            <CardContent>
                <p>{desc}</p>
            </CardContent>
        </Card>
    );
}