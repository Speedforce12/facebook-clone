import { db, storage } from "@/firebase/firebase";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BiHappyAlt, BiVideoRecording } from "react-icons/bi";
import { FaPhotoVideo } from "react-icons/fa";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const InputBox = () => {
  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const postsRef = collection(db, "posts");

  // submit the post to the server with image
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;
    try {
      await addDoc(postsRef, {
        message: inputRef.current.value,
        name: "speedy",
        email: "testdata@gmail.com",
        image: image,
        timestamp: serverTimestamp(),
      });
      setImage(null)
    } catch (error) {
      console.error(error);
    }
    inputRef.current.value = "";
  };

  // upload the image to the server and get its url
  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileRef = ref(storage, `posts/${file.name}`);
    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setImage(url);
    } catch (err) {
      console.error(err);
    }
    console.log(image);
  };

  // delete image from firebase 
  const deleteImage = () => {
    const deleteRef = ref(storage, image);
    deleteObject(deleteRef)
      .then(() => {
        // image deleted successfully
        setImage(null);
      })
      .catch((error) => {
        // error handling
        console.log(error);
      });
  };

  return (
    <form className='w-full rounded-lg  bg-black/10 p-3 shadow-lg'>
      <div className='flex items-center space-x-3 border-b border-gray-400/20 pb-3'>
        <Image
          src='/images/avatar.png'
          width={200}
          height='200'
          alt=''
          className='h-12 w-12 rounded-full object-contain'
        />

        <div className='w-full rounded-full bg-gray-600/20 py-1'>
          <input
            ref={inputRef}
            type='text'
            placeholder="Whats on your mind, O'vonee.?"
            className='w-full bg-transparent p-2 indent-2 text-white focus:outline-none'
          />
        </div>

        {image && (
          <div
            className='flex transform cursor-pointer flex-col filter transition duration-200 hover:scale-110 hover:brightness-110'
            onClick={deleteImage}>
            <Image
              src={image}
              alt=''
              width={100}
              height={100}
              className='h-10 object-contain'
            />
            <p className='text-center text-xs text-red-500'>Remove</p>
          </div>
        )}
      </div>

      <div className='mt-3 flex items-center justify-evenly'>
        <div className='flex w-full cursor-pointer items-center space-x-2 rounded-md px-6 py-1 hover:bg-slate-400/20'>
          <BiVideoRecording className='text-4xl text-red-600' />
          <span className='font-semibold text-white'>Live video</span>
        </div>
        <div
          className='flex w-full cursor-pointer items-center space-x-2 rounded-md px-6 py-1 hover:bg-slate-400/20'
          onClick={() => imageRef.current.click()}>
          <FaPhotoVideo className='text-4xl text-green-600' />
          <span className='font-semibold text-white'>Photo/video</span>
          <input
            type='file'
            ref={imageRef}
            className='hidden'
            onChange={(e) => handleImage(e)}
          />
        </div>
        <div className='flex w-full cursor-pointer items-center space-x-2 rounded-md px-6 py-1 hover:bg-slate-400/20'>
          <BiHappyAlt className='text-4xl text-yellow-600' />
          <span className='font-semibold text-white'>Feeling/activity</span>
        </div>
      </div>

      <button className='hidden' type='submit' onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};

export default InputBox;
