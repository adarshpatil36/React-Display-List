import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const ProgressLoader = (props) => {
  const { message, ...rest } = props;
  return (
    <Dimmer className="loaderClass" active inverted {...rest}><Loader inverted>{message || 'Loading'}</Loader></Dimmer>
  );
};

export default ProgressLoader;
