import React, {useState} from 'react';

const CheckComp = () => {
    let [check, setCheck] = useState(true);

    return (
        <div>
            <div><input type="checkbox" checked={check} onChange={(event) => setCheck(event.target.checked)}/>press me</div>
            {
                check
                    ? <div>включено</div>
                    : <div>выключено</div>
            }
        </div>
    );
};

export default CheckComp;