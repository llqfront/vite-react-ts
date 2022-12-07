import React, { memo } from 'react';
interface Props {
}
const Com: React.FC = (props: Props) => {
    return (
      <div className="header">
        <h3>缘来</h3>
      </div>
    )
}
export default memo(Com);
