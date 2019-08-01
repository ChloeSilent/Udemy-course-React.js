import React, { Component } from 'react';

import './item-status-filter.css';

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

class ItemStatusFilter extends Component {

    render() {

        const buttons = filterButtons.map((button) => {
            const { label } = button;
            return (
                <button type="button" className="btn" >{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}

            </div>
        )
    }
}
/*старый вид - здесь нет state - поэтому  */
// const ItemStatusFilter = () => {
/**btn-info btn-outline-secondary*/

// const buttons = filterButtons.map((button) => {
//     const {label} = button;
//     return (
//         <button type="button" className="btn" >{label}</button>
//     )
// });

// return (
//     <div className="btn-group">
//         {buttons}

//     </div>
// )
// }

export default ItemStatusFilter;