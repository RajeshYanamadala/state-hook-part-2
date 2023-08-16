import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setUserName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([])

  const onsubmitComments = event => {
    event.preventDefault()

    const NewComment = {
      id: uuid(),
      name,
      commentText,
    }
    setUserName('')
    setCommentText('')
    setCommentList(prevComment => [...prevComment, NewComment])
  }

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangeCommentText = event => {
    setCommentText(event.target.value)
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onsubmitComments}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeUserName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeCommentText}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentList.map(eachComment => (
        <CommentItem commentDetails={eachComment} key={eachComment.id} />
      ))}
    </CommentsContainer>
  )
}
export default Comments
