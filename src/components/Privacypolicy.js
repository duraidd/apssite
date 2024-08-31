import React from 'react'
import Appheader from './Appheader'
import Breadscrum from './Breadscrum'
import Footer from './Footer'
import { Box } from '@mui/material'
import SideTip from "./SideTip";

function Privacypolicy() {
    return (
        <>
            <Appheader />
            <Breadscrum dataParent={["Home", "Privacy Policy"]} />
            <SideTip/>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '50px' }} >
                <Box sx={{ marginTop: '120px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}><h1>Privacy Policy</h1></Box>
                <Box sx={{padding:'0px 10%',fontFamily:'Plus Jakarta Sans'}}>
                    
                    APS Technologies  is committed to protecting your privacy and ensuring a safe and secure online experience. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information on our website, apstechnologies.co.in. By using our website, you consent to the practices described in this policy.
                    This policy applies exclusively to APS Technologies and not to other companies, organizations, or websites to which we may link.<br/><br/>
                    1. Information Collection and Usage <br/>
                    1.1 Registration and Personal Information
                    When you register on our website or engage in activities such as submitting a resume or entering contests, we may collect personal information such as your name, email address, and correspondence address. We may combine this information with data from third parties to enhance your experience and improve the quality of our services. For certain services, you may have the option to opt out of this data combination.
                    Your personal information is primarily used for personalization, verification, and to deliver the services you request.<br/><br/>
                    1.2 Cookies<br/>
                    We use cookies, which are small data files stored on your device, to enhance your user experience. Cookies help us track user traffic patterns and support personalization features. These cookies do not read data from your hard disk or access cookies created by other websites.<br/><br/>
                    1.3 User Communications<br/>
                    When you communicate with us via email or other channels, we may retain those communications to address your inquiries, respond to your requests, and improve our services. If you use services that involve SMS functionality, we may collect and maintain information related to those messages, such as phone numbers, message content, and timestamps. We may also use your email address to inform you about our services.<br/><br/>
                    1.4 Log Information<br/>
                    Our servers automatically record certain information when you access our services. This may include your web request, interactions with our services, IP address, browser type and language, the date and time of your request, and one or more cookies that may uniquely identify your browser or account.<br/><br/>
                    1.5 Electronic Newsletter/E-mail<br/>
                    APS Technologies offers a free electronic newsletter to users who voluntarily subscribe. You can opt-out of this mailing list at any time by following the unsubscribe link provided in each newsletter.
                    2. Confidentiality and Data Protection
                    This Privacy Policy applies solely to the services provided by APS Technologies through apstechnologies.co.in. We do not control or manage external sites linked from our services. If you provide personal information to other websites, that data may be transmitted to APS Technologies in order to fulfill the services you request. Such information is processed in accordance with this Privacy Policy.<br/><br/>
                    3. Feedback<br/>
                    Our website’s feedback forms may request contact information, such as your name and email address, as well as demographic information, such as your postal code and age. This information helps us enhance our services.<br/><br/>
                    4. Continuous Improvement<br/>
                    We may use the information we collect to provide, maintain, protect, and improve our services, as well as to develop new services that better meet your needs.<br/><br/>
                   
                    
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Privacypolicy