import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        margin: '10px',
        width: 200,
        height: 200,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
})

export default function ForecastCard({ doy, min, max }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h4' gutterBottom>
                    {doy}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {min} | {max}
                </Typography>
            </CardContent>
        </Card>
    )
}
