import React, {Component} from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Avatars extends Component {
    render() {
        return (
            <div style={{display:'flex',alignItems:"center"}}>
                    <Avatar size={64} icon={<UserOutlined />} />
            </div>
        )
    }
}

export default Avatars;
