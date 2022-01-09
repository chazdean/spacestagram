import React, { useState, useEffect } from 'react'
import { MediaCard, Icon, Stack, TextStyle } from '@shopify/polaris';
import { HeartMajor } from '@shopify/polaris-icons';

export default function Post(props) {

    const [liked, setLike] = useState(()=>{
        const localData = localStorage.getItem(props.id);
        return localData ? JSON.parse(localData) : false;
    })

    useEffect(() => {
        localStorage.setItem(props.id, JSON.stringify(liked))
    }, [liked, props.id])
 
    function toggleLike() {
        liked ? setLike(false) : setLike(true)
    }

    return (
        <MediaCard
            title={`${props.roverName} - ${props.cameraName}`}
            primaryAction={{
                content: liked ? "Unlike" : "Like",
                onAction: () => {toggleLike()},
            }}
            description={
            <Stack vertical={true} alignment='leading'>
                <TextStyle>{props.date}</TextStyle>
                {liked ? <Icon source={HeartMajor} color="critical" /> : ""}
            </Stack>}
        >
        <img
            alt=""
            width="100%"
            height="100%"
            style={{
            objectFit: 'cover',
            objectPosition: 'center',
            }}
            src={props.img}
        />
        </MediaCard>
    )
} 