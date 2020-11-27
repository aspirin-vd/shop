import React from 'react';
import { GeneralServiceConsumer } from '../GeneralServiceContext';

const withGeneralService = () => (Wrapped) => (props) => (
   <GeneralServiceConsumer>
      {(generalService) => (
         <Wrapped {...props} generalService={generalService} />
      )}
   </GeneralServiceConsumer>
);

export default withGeneralService;
