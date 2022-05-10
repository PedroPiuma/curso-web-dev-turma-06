import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { createPost } from './services/posts'

function App() {
  const schema = yup.object({
    title: yup.string().required('Título obrigatório'),
    body: yup.string().min(30, 'Mínimo 30 caracteres').required('Conteúdo obrigatório'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async data => {
    // const reponse = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
    const reponse = await createPost(data)
    console.log(reponse.data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='title' {...register("title")} />
      <p>{errors.title?.message}</p>

      <textarea placeholder='body' {...register("body")} />
      <p>{errors.body?.message}</p>

      <input type="submit" />
    </form>
  );




}

export default App;
