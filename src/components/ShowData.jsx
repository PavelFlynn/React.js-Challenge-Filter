import PropTypes from 'prop-types';
import { Item } from '../models/item.model';

export function ShowData({rows}) {
    return (
        <div>
            <b>rows: </b>{rows.length}
            <pre>{JSON.stringify(rows, null, '2')}</pre>
        </div>
    )
}

ShowData.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.instanceOf(Item))
};