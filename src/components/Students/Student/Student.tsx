import React from 'react'

const Student = (props: {name: string}) => {
    return (
        <section>
            {props.name}
        </section>
    )
}

export default Student
