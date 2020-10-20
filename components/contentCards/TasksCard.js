import React from "react";

import Card from "../Card";
import InlineText from "../InlineText";

const TasksCard = () => {
    return (
        <Card title='Upcoming Tasks' titleBackground='#4E7E56'>
            <InlineText text='Task 1' subText='Today 11:00' />
            <InlineText text='Task 2' subText='30/90 09:30' />
            <InlineText text='Task 3' subText='03/10 13:00' />
        </Card>
    );
};

export default TasksCard;
