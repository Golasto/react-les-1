import React from 'react';
function Button({props, enabled}) {
    if (enabled) {
        return (
            <>
                <button onClick={(() => {console.log(props)})}>{props}</button>
            </>
        );
    }else {
        return (
        <>
            <button onClick={(() => {console.log(props)})} disabled>{props}</button>
        </>
        )
    }
}

export default Button;
