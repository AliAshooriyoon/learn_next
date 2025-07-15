const Contact = () => {
  const getData = async (formData) => {
    "use server"
    console.log(formData)
    const name = formData.get('name')
    const mail = formData.get("mail")
    const message = formData.get("message")
    console.log(name, mail, message)
  }
  return (
    <>
      <div className="mx-auto text-center">
        Contact with Us

        <form className="mx-auto text-center flex flex-col items-center gap-4" action={getData}>
          <input type='text' id='name' name='name' placeholder="Ihr Name" className="    h-12 indent-1 bg-white text-black w-96 mt-6 outline-0 p-1 rounded-xl" />
          <input type='text' id='mail' name='mail' placeholder="Ihre E-Mail" className=" h-12 indent-1 bg-white text-black w-96 mt-6 outline-0 p-1 rounded-xl" />
          <textarea id='message' name='message' placeholder="Ihr Nachricht" className=" indent-1 bg-white text-black w-96 mt-6 outline-0 p-1 rounded-xl" />
          <input type='submit' className='border-2 px-6 py-2 rounded-xl hover:bg-white hover:text-black delay-200 cursor-pointer' />
        </form>

      </div>
    </>
  )
}
export default Contact;
