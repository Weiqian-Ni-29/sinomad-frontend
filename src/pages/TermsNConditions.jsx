import NavBarCustom from '../components/NavBarCustom';
import './TermsNConditions.css';
import Divider from '@mui/material/Divider';
function TermsNConditions() {
    return(
        <div>
            <NavBarCustom title="Terms & Conditions"/>
            <div className='outer-container'>
                <div className='terms-n-conditions'>
                    <h2>Terms of Use -- 使用条款</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider style={{ width: '100%' }} />
                </div>
                    <h3>Definitions -- 定义</h3>
                    <p className="dot-before">For the purposes of these terms, "we," "our," and "us" refer to the SiNomad team.</p>
                    <p className="dot-before">在本条款中，“我们”、“我们的”和“SiNomad团队”具有相同含义。</p>
                    <h3>Non-Binding Information -- 信息不具法律约束力</h3>
                    <p className="dot-before">The content, pricing, and descriptions provided on this platform are for informational purposes only and do not constitute a contractual offer or legally binding agreement. All services are subject to confirmation and the execution of a separate written agreement between the parties. We reserve the right to modify or update any information at our sole discretion without prior notice. Users are advised to contact us directly for detailed terms and conditions.</p>
                    <p className="dot-before">本平台提供的内容、价格及描述仅供参考，并不构成合同要约或具备法律约束力的协议。所有服务均需经双方确认，并以另行签订的书面协议为准。我们保留自行修改或更新任何信息的权利，且无需事先通知用户。用户如需了解具体条款和条件，建议直接联系我们。</p>
                    <h3>Intellectual Property Rights -- 知识产权声明</h3>
                    <p className="dot-before">Unless otherwise explicitly stated, all content available on this platform, including but not limited to trademarks, logos, photographs, written materials, and any other intellectual property, is owned by us and is protected under applicable intellectual property laws. Users are prohibited from copying, reproducing, distributing, or otherwise using any content from this platform without prior written consent from us. Unauthorized use may result in legal action.</p>
                    <p className="dot-before">除非另有明确说明，本平台上的所有内容，包括但不限于商标、标识、照片、文字资料及其他知识产权，均归属我们所有，并受适用的知识产权法律保护。未经我们事先书面许可，禁止复制、转载、分发或以其他方式使用本平台的任何内容。未经授权的使用可能导致法律责任。</p>
                    <h3>User Conduct -- 网站使用规范</h3>
                    <p className="dot-before">By using this platform, users agree to comply with all applicable laws and regulations. Users shall not engage in activities that may disrupt the operation of this platform, infringe upon our intellectual property, or harm other users. We reserve the right to suspend or terminate access to our platform for any violations.</p>
                    <p className="dot-before">使用本平台时，用户需遵守所有适用的法律法规。用户不得从事可能干扰平台运行、侵犯我们知识产权或对其他用户造成损害的活动。对于任何违规行为，我们保留暂停或终止用户访问本平台的权利。</p>
                </div>
            </div>
        </div>
        
    );
}
export default TermsNConditions;