import React from "react";

import Card from "../Card";
import InlineText from "../InlineText";

const EventsCard = () => {
    const date = `${new Date().getDate()}/${new Date().getMonth() + 1}`;
    return (
        <Card title='Upcoming Events' subTitle={date} titleBackground='#50637B'>
            <InlineText text='Event 1' subText='28/03 11:42' />
            <InlineText text='Event 2' subText='28/03 11:42' />
            <InlineText text='Event 3' subText='28/03 11:42' />
        </Card>
    );
};

export default EventsCard;
