import React from 'react';

import OperationItem from './OperationItem';

const OperationList = ({operations, currency, sendOperation}) => (
  <div>
    {operations.map(operation => <OperationItem key={operation.id} {...operation}
                                  currency={currency} handleClick={ () => sendOperation(operation, currency) } />)}
  </div>
);

export default OperationList;
