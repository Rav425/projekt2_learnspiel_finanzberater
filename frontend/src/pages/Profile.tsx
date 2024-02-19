// import {useSelector} from 'react-redux'
// import { useEffect, useRef, useState } from 'react';
// import { Avatar} from "flowbite-react";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import {signOut} from '../redux/user/userSlice'
// import { useDispatch } from 'react-redux';

// export default function Profile() {
//   const {currentUser} = useSelector(state => state.user);
//   const [imageFile, setImageFile ] = useState(null); 
//   const [imageFileUrl, setImageFileUrl] = useState(null);
//   const { loading } = useSelector((state) => state.user);
//   const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
//   const dispatch = useDispatch();
//   const filePickerRef = useRef();
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageFileUrl(URL.createObjectURL(file));
//     }
//   };
//   useEffect(() => {
//     if(imageFile) {
//       uploadImage();
//     }
//   }, [imageFile]);

//   const uploadImage = async () => {
//     const formData = new FormData();
//     formData.set('profileImage', imageFile);

//   try {
//     const response = await fetch('/api/profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
// //     });
    
// //     const data = await response.json();
// //     if (response.ok) {
// //       alert('Image uploaded successfully');
// //       // data.url is the URL or path of the uploaded image returned from the server
// //       // You can now store data.url in your MySQL database
// //     } else {
// //       console.log('Failed to upload image');
// //     }
// //   } catch (error) {
// //     console.error('An error occurred while uploading the image', error);
// //   }
// //   };

//   // const handleSignout = async() => {
//   //   try {
//   //     await fetch('/api/auth/signout');
//   //     dispatch(signOut());
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//   return (
//     <div className='max-w-lg mx-auto p-3 w-full'>
//       <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
//       <form className='flex flex-col gap-4'>
//         <input type="file" name='profileImage' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
//         <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={()=>
//         filePickerRef.current.click()}
//         > 
//           <img src={imageFileUrl || currentUser.profilePicture || <Avatar/>} /*alt='user'*/ className={`w-100 rounded-full w-full h-full object-cover border-8 border-[lightgray]`} />
//           {imageFileUploadProgress && (
//             <CircularProgressbar value={imageFileUploadProgress || 10} text={`${imageFileUploadProgress}%`} 
//             strokeWidth={5}
//             styles={({
//               root: {
//                 position: 'absolute',
//                 width: '100%',
//                 height: '100%',
//                 transform: 'translate(-50%, -50%)',
//                 top: 0,
//                 left: 0,
//               },
//               path: {
//                 stroke: `rgba(62, 152, 199, ${
//                   imageFileUploadProgress / 100
//                 })`,
//               },
//             })}
//             />
//           )}
        
//         </div>
//         <input type="text" name="" id="username" placeholder='Username' defaultValue={currentUser.username}
//        /* onChange={}*//>
//         <input type="text" name="" id="name" placeholder='Name' defaultValue={currentUser.name}
//        /* onChange={}*//>
//         <input type="email" name="" id="email" placeholder='Email' defaultValue={currentUser.email}
//        /* onChange={}*//>
//         <input type="password" name="" id="password" placeholder='Passwort ändern'
//        /* onChange={}*//>
//        <button type="submit" disabled={loading} className='bg-sky-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
//        {loading ? 'Loading...' : 'Update'}
//        </button>
//       </form>
//       <div className="text-red-500 flex justify-between mt-5">
//         <span className='cursor-pointer'>Delete Account</span>
//         {/* <span onClick={handleSignout} className='cursor-pointer'>Sign Out</span> */}
//       </div>
//     </div>
//   )
// }
