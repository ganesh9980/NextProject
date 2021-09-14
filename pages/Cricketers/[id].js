import { useRouter } from "next/dist/client/router";

export default function Cricketers()
{
    const router=useRouter()
    const {id}=router.query
    return <h1>Hello {id}</h1>
}