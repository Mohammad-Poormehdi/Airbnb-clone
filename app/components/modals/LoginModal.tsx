"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {toast} from 'react-hot-toast'
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    signIn('credentials',{
      ...data,
      redirect:false,

    }).then(callback=>{
      setisLoading(false)
      if(callback?.ok){
        toast.success('Logged in')
        router.refresh()
        loginModal.onClose()
      }
      if(callback?.error){
        toast.error(callback.error)
      }
    })
  };
  const toggle = useCallback(()=>{
    loginModal.onClose()
    registerModal.onOpen()
  },[loginModal, registerModal])
  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading title="Welcome to Back" subtitle="Login to your account"  />
        <Input id="email" label="Email" type="email"  disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Password" type="password"  disabled={isLoading} register={register} errors={errors} required />
    </div>
  )
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <Button icon={FcGoogle} onClick={()=>{}} outline label="Continue with Google" />
      <Button icon={AiFillGithub} onClick={()=>signIn('github')} outline label="Continue with Github" />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="">First time using Airbnb ?</div>
          <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">Create an account</div>
        </div>
        
      </div>
    </div>
  )
  return (
    <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    >
    
    </Modal>
  );
};

export default LoginModal;
