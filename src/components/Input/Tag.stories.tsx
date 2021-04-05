import React from 'react';
import Tag from './Tag';

export default {
    title: 'Tag Title',
    component: Tag
}


export const Basic = () => (
     <Tag/>
)


export const Secondary = () => (
    <Tag title="Secondary" backgroundColor='blue'/>
)