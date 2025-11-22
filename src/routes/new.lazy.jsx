import { createLazyFileRoute } from '@tanstack/react-router'

// import Diary from "../Diary";
import MediaForm from '../MediaForm'

export const Route = createLazyFileRoute('/new')({
  component: AddNew,
})

function AddNew() {
  return (
    <>
      <MediaForm />
    </>
  )
}
