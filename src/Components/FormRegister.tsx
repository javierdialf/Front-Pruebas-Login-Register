import {useForm} from 'react-hook-form';
import { RegisterData, Usuario} from '../Models/ModelsRegister';
import * as Services from '../Services/RegisterServices';


const FormRegister = () => {
    const {register, handleSubmit, formState: {errors}, getValues, reset} = useForm<RegisterData>();

    const Enviar = handleSubmit((values) => {
        const NewUser: Usuario = {
            Nombre: values.Nombre,
            Email: values.Email,
            Password: values.Password
        }
        Registro(NewUser)
    });

    

    const Registro = async (usuario: Usuario) => {
       const res =  await Services.PostNuevoUsuario(usuario);
       console.log(res);
        if(res.status === 200){
            reset();
        }
    }




    return(
        <div className="max-w-sm rounded-xl overflow-hidden shadow-xl m-auto my-20">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" className="mx-auto h-14 w-auto">
                
                <path fill="#39c2d8" d="M23.835,85.323c-1.843,0-3.835-1.467-3.835-3.836v-62.65C20,16.467,21.991,15,23.835,15	c0.647,0,1.271,0.164,1.856,0.49l56.342,31.324C83.265,47.502,84,48.753,84,50.163s-0.737,2.66-1.967,3.345L25.69,84.834	C25.106,85.157,24.481,85.323,23.835,85.323L23.835,85.323z"></path><path fill="#a1d3a2" d="M21.579,15.536l3.336-0.251l42.001,23.184L55.551,49.747L21.579,15.536z"></path><path fill="#f9e65c" d="M83.593,47.867l-16.677-9.398L55.551,49.747l11.488,11.653l15.936-8.52L83.593,47.867z"></path><path fill="#f15b6c" d="M21.084,84.209l34.466-34.462l11.488,11.653L24.049,85.336L21.084,84.209z"></path><path fill="#1f212b" d="M23.835,86.322c-2.325,0-4.835-1.849-4.835-4.836v-62.65C19,15.849,21.51,14,23.835,14 c0.821,0,1.609,0.208,2.343,0.617L82.519,45.94C84.072,46.808,85,48.386,85,50.163c0,1.779-0.928,3.356-2.482,4.219L26.177,85.708 C25.439,86.116,24.652,86.322,23.835,86.322z M23.835,16C22.472,16,21,17.084,21,18.836v62.65c0,1.752,1.472,2.836,2.835,2.836 c0.475,0,0.936-0.122,1.371-0.363l56.34-31.325C82.457,52.128,83,51.205,83,50.163s-0.544-1.967-1.455-2.476L25.204,16.364 C24.771,16.122,24.311,16,23.835,16z"></path><path fill="#1f212b" d="M66.935,62.022c-0.13,0-0.259-0.05-0.356-0.149L44.153,39.045c-0.193-0.197-0.191-0.514,0.006-0.707 c0.198-0.192,0.515-0.19,0.707,0.006l22.425,22.828c0.193,0.197,0.191,0.514-0.006,0.707 C67.188,61.975,67.062,62.022,66.935,62.022z M42.407,37.054c-0.13,0-0.259-0.05-0.356-0.149l-1.401-1.427 c-0.193-0.197-0.191-0.514,0.006-0.707c0.198-0.193,0.515-0.19,0.707,0.006l1.401,1.427c0.193,0.197,0.191,0.514-0.006,0.707 C42.66,37.006,42.534,37.054,42.407,37.054z M36.101,30.634c-0.13,0-0.259-0.05-0.356-0.149L21.729,16.217 c-0.193-0.197-0.191-0.514,0.006-0.707c0.198-0.193,0.515-0.19,0.707,0.006l14.016,14.268c0.193,0.197,0.191,0.514-0.006,0.707 C36.354,30.586,36.228,30.634,36.101,30.634z"></path><path fill="#1f212b" d="M21.333,84.526c-0.127,0-0.254-0.048-0.352-0.145c-0.196-0.194-0.198-0.511-0.004-0.707 l12.543-12.676c0.193-0.196,0.51-0.198,0.707-0.004c0.196,0.194,0.198,0.511,0.004,0.707L21.688,84.378 C21.591,84.477,21.462,84.526,21.333,84.526z M38.8,66.875c-0.127,0-0.254-0.048-0.352-0.145c-0.196-0.194-0.198-0.511-0.004-0.707 l28.135-28.433c0.194-0.196,0.511-0.198,0.707-0.004s0.198,0.511,0.004,0.707L39.155,66.727 C39.058,66.825,38.929,66.875,38.8,66.875z"></path><path fill="#1f212b" d="M24.5,77.447c-0.276,0-0.5-0.224-0.5-0.5V49.889c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v27.059C25,77.224,24.776,77.447,24.5,77.447z M67.87,56.733c-0.175,0-0.346-0.093-0.437-0.257 c-0.135-0.241-0.048-0.546,0.193-0.68l7.777-4.324c0.483-0.269,0.771-0.759,0.771-1.311c0-0.553-0.288-1.043-0.771-1.313 l-4.966-2.761c-0.241-0.134-0.328-0.438-0.193-0.68c0.134-0.242,0.439-0.328,0.68-0.193l4.966,2.761 c0.805,0.447,1.285,1.265,1.285,2.186s-0.48,1.737-1.285,2.185l-7.777,4.323C68.036,56.713,67.953,56.733,67.87,56.733z M68.131,44.734c-0.083,0-0.166-0.021-0.243-0.063l-1.604-0.892c-0.241-0.135-0.328-0.439-0.194-0.681 c0.136-0.242,0.44-0.325,0.681-0.194l1.604,0.892c0.241,0.135,0.328,0.439,0.194,0.681C68.477,44.642,68.306,44.734,68.131,44.734z M24.5,40.309c-0.276,0-0.5-0.224-0.5-0.5V23.377c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v16.432 C25,40.085,24.776,40.309,24.5,40.309z"></path>
                </svg>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create account
                </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={Enviar} method="POST" className="space-y-6">

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                        {...register('Nombre', {required:true, minLength:8, maxLength:35, pattern:/^[a-zA-Z ]+$/ })}
                        placeholder='Forrest Gump'
                        type='text'
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {errors.Nombre?.type === 'required' && <p className='text-red-500 text-xs'>Por favor ingrese su nombre</p>}
                        {errors.Nombre?.type === 'minLength' && <p className='text-red-500 text-xs'>Ingrese su nombre completo</p>}
                        {errors.Nombre?.type === 'maxLength' && <p className='text-red-500 text-xs'>Su nombre no puede tener mas de 35 caracteres</p>}
                        {errors.Nombre?.type === 'pattern' &&     <p className='text-red-500 text-xs'>!Solo letras¡ no se permiten numeros o caracteres especiales</p>}
                         </div>
                    </div>



                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        {...register('Email', {required:true, pattern:/^[a-zA-Z0-9]{3,50}@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })}
                        autoComplete="email"
                         placeholder='Example@gmail.com'
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          {errors.Email?.type === 'required' && <p className='text-red-500 text-xs'>El campo Email es obligatorio</p>}
                          {errors.Email?.type === 'pattern' && <p className='text-red-500 text-xs'>Ingrese un email valido</p>}
                         </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        {...register('Password', {required: true, minLength:8, maxLength:16, pattern:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S+$/})}
                        type="password"
                        placeholder='************'
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Password?.type === 'pattern' && <p className=' text-red-500 text-xs'>La contraseña debe tener almenos una mayuscula, un digito y una minusculas</p>}
                        {(errors.Password?.type === 'minLength' || errors.Password?.type === 'maxLength') && <p className='text-red-500 text-xs'>La contraseña debe tener entre 8 y 16 caracteres</p>}
                        
                    </div>
                    </div>


                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        {...register('confirmPassword',
                             {required: true, 
                                validate: (value) => value === getValues('Password')})}
                        type="password"
                        placeholder='************'
                        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.confirmPassword?.type === 'validate' && <p className=' text-red-500 text-xs'>Las contraseñas no coinciden</p>}
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                        Create acount
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                    <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    
                    Login here
                    </a>
                </p>
                </div>
         </div>

        </div>

        
    );
}


export default FormRegister;