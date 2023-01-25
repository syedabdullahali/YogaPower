import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CImage,
    CInputGroup,
    CRow,
} from "@coreui/react";
import { listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import { storage } from "src/firebase";
import { v4 } from "uuid";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const LogoSetup = () => {
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState()
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    console.log(username);
    const [result, setResult] = useState(null);
    const [imageList, setImageList] = useState(null);
    useEffect(() => {
        fetch(`${url}/brandlogoupdate/all`, {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));

        getImage()
        console.log(result);
    }, []);

    function getImage() {
        listAll(imagesListRef).then((response) => {
            setImageList(response);
        })
    }

    const saveLogo = () => {
        let data = { username, logoImage: imageUrl }
        // console.warn(data);
        fetch(`${url}/brandlogoupdate/create`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                console.log(imageUrl);
                alert("successfully submitted")
                navigate('/master/center-setup')
            })
        })
    }

    const imgRef = useRef(null)
    const handleImage = (e) => {
        setImage(e.target.files[0])
        const file = e.target.files[0]
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            imgRef.current.src = e.target.result
        }
        reader.readAsDataURL(file)
        console.log(file, image);
    }

    const imagesListRef = ref(storage, "logo/");
    const UploadImage = () => {
        if (image == null) return;
        const imageRef = ref(storage, `logo/${image.name + v4()}`)
        console.log(imageRef.fullPath);
        setImageUrl(imageRef.fullPath)

        uploadBytes(imageRef, image).then(() => {
            alert('image uploaded')
        })
    }
    console.log(imageUrl);
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Logo Setup</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={2} md={3} className='mt-2 mb-1' >
                            <CImage ref={imgRef} className="mb-1" style={{ borderRadius: "50px" }} width={'160px'} src={ProfileIcon} />
                        </CCol>
                        <CCol lg={6} md={6} className='mt-4'>
                            <CRow>
                                <CCol lg={12} md={6}>
                                    <CInputGroup className="mb-2">
                                        <CFormInput
                                            className=" mr-3"
                                            type="file"
                                            onChange={handleImage}
                                            accept="image/*"
                                        />
                                    </CInputGroup>
                                </CCol>
                                <CCol lg={6} md={6}>
                                    <CButton onClick={UploadImage}>Upload Image</CButton>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="mt-2" onClick={saveLogo}>Save</CButton>
                    <CButton className="mt-2 ms-2" onClick={() => navigate('/master/center-setup')} >Cancel</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default LogoSetup;