import React from 'react';

import { AccessAlarm } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';

const AccessAlarmIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const Icons = () => {
  return (
    <div>
      <h5>Esto es un icon component</h5>
      <AccessAlarm />
      <hr />
      <h5>Esto es un svg component</h5>
      <AccessAlarmIcon color="primary" />
      <hr />
    </div>
  );
};

export default Icons;
