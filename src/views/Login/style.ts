import styled from 'styled-components'
import backgroundImg from '@/assets/img/1.jpg'


export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: skyblue;
    background: url(${backgroundImg});
    background-size: cover;

    .form-box{
        .title{
            font-size: 24px;
            color: white;
            height: 100px;
            line-height: 100px;
        }
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 300px;
        width: 500px;
        padding: 14px;
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.43);
        box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
        
        :where(.css-dev-only-do-not-override-ph9edi).ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
            border-color: pink;
        }

        .ant-input{
            border-radius: 0;
        }
        .ant-input-password{
            border-radius: 0;
        }
        .ant-form-item-label{
            label{
                /* text-align: center; */
                padding-left: 8px;
                width: 100%;
                background-color: #fed14e;
                color: #005377;
            }
        }
        .operate-bar{
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .ant-checkbox-wrapper{
                color: rgb(238, 223, 179);
            }
            .ant-btn{
                background-color: #005377;
                border-radius: 0;
            }
        }
    }
`


