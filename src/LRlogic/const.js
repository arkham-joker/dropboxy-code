//sending get request//
const signin_request_sent='signin_request_sent';
const signin_request_success='signin_request_success';
const signin_request_failour='signin_request_failour';
const signout_request='signout_request';
//sending post request//
const signup_request_sent='signup_request_sent';
const signup_request_success='signup_request_success';
const signup_request_failour='signup_request_failour';

const signin={signin_request_failour,signin_request_success,signin_request_sent,signout_request};
const signup={signup_request_failour,signup_request_sent,signup_request_success};
const LR={signin,signup};
export default LR;