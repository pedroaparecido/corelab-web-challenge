import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import Icone from "../IconeStar/inde";

import { AiFillStar } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineBgColors } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import useSWR from "swr";
import axios from "axios";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import IconeStar from "../IconeStar/inde";
import IconeEdit from "../IconeEdit/inde";
import IconeColor from "../IconeColor/inde";
import IconeClose from "../IconeClose/inde";

interface IGranCard {
  title: string,
  body: string,
  id: string
}

const fetcher = (url: string)  => axios.get(url).then((res) => res.data)

const GranCard = (props: IGranCard) => {
  const [stateColor , setStateColor] = useState(false)
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedId, setEdtedId] = useState(props.id);
  const [editedBody, setEditedBody] = useState(props.body);
  const { register, handleSubmit } = useForm()

  const handleEditClick = () => {
    setEditMode(true);
  };

  const { data } = useSWR('http://localhost:3003/get', fetcher)

  // Função para enviar as alterações ao servidor (PATCH)
  const handlePatchData = async (data: FieldValues) => {
    try {
      const response = await axios.patch(`http://localhost:3003/patch/${props.id}`, {
        title: data.title,
        body: data.body,
        id: props.id
      });
      console.log('Dados atualizados:', response.data);
      setEditMode(false); // Finaliza o modo de edição após o PATCH
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  }

  const handleDel = async () => {
    console.log('aqui')
    const response = await axios.delete(`http://localhost:3003/delete/${props.id}`)
    //console.log(response)
  }

  return (
    <div className={styles.GranCard}>
              <IconeStar onClick={() => {
                setEditMode(!editMode)
              }}
              state={editMode}
            />
      <form onSubmit={handleSubmit(handlePatchData)}>
        <div className={styles.div1}>
          <input type="text" placeholder={props.title} {...register('title')} name="title" />
        </div>
        <textarea typeof="text" placeholder={props.body} {...register('body')} name="body" />
        </form>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <IconeEdit onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
            <IconeColor onClick={() => {}} />
          </div>
          <div>
            <IconeClose onClick={() => {handleDel()}} />
          </div>
        </div>
    </div>
  );
};

export default GranCard;
