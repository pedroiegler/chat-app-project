import React from "react";
import { MdChat } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import * as C from "./styles";
import "../../styles/styles.css";
import * as EmailValidator from "email-validator";
import Swal from 'sweetalert2';

const SidebarHeader = ({ setUserChat }) => {
    const [user] = useAuthState(auth);
    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);

    const handleCreateChat = async () => {
        const { value: emailInput } = await Swal.fire({
            title: 'Digite o e-mail para começar uma conversa',
            input: 'email',
            inputPlaceholder: 'Digite o e-mail',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#1c45ab',
            customClass: {
                title: 'custom-swal-title',  
                htmlContainer: 'custom-swal-text',
                icon: 'custom-icon-class',
                confirmButton: 'custom-button',
                input: 'custom-input-class',
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Você precisa digitar um e-mail';
                }
            }
        });
    
        if (!emailInput) return;
    
        if(!EmailValidator.validate(emailInput)){
            return Swal.fire({
                title: 'E-mail inválido!',
                text: 'Por favor, insira um e-mail válido.',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#1c45ab',
                customClass: {
                    title: 'custom-swal-title',  
                    htmlContainer: 'custom-swal-text',
                    icon: 'custom-icon-class',
                    confirmButton: 'custom-button',
                }
            });
        } else if(emailInput === user.email){
            return Swal.fire({
                title: 'E-mail inválido!',
                text: 'Insira um e-mail diferente do seu.',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#1c45ab',
                customClass: {
                    title: 'custom-swal-title',  
                    htmlContainer: 'custom-swal-text',
                    icon: 'custom-icon-class',
                    confirmButton: 'custom-button',
                }
            });
        } else if(chatExists(emailInput)){
            return Swal.fire({
                title: 'Chat já existe!',
                text: 'Você já possui um chat com este e-mail.',
                icon: 'info',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#1c45ab',
                customClass: {
                    title: 'custom-swal-title',  
                    htmlContainer: 'custom-swal-text',
                    icon: 'custom-icon-class',
                    confirmButton: 'custom-button',
                }
            });
        }
    
        db.collection("chats").add({
            users: [user.email, emailInput],
        });
    };

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        );
    };


    return (
        <C.Container>
            <C.Content>
                <TbLogout2 onClick={() => [auth.signOut(), setUserChat(null)]} />
                <C.Avatar src={user?.photoURL} />
            </C.Content>
            <C.Options>
                <MdChat onClick={handleCreateChat} />
            </C.Options>
        </C.Container>
    )
};

export default SidebarHeader;