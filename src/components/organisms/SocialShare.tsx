import { Twemoji } from 'react-emoji-render'
import {
  FacebookShareButton,
  HatenaShareButton,
  PocketShareButton,
  TwitterShareButton,
} from 'react-share'

type Props = {
  postUrl: string
  postTitle: string
}

const SocialShare = ({ postUrl, postTitle }: Props) => {
  return (
    <div className=" text-center">
      <p className="mb-6 flex items-center justify-center">
        <Twemoji text="📎" />
        <span className="ml-1 text-lg">Social Share</span>
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <TwitterShareButton url={postUrl} className="mx-3">
          <span>Twitter</span>
        </TwitterShareButton>
        <HatenaShareButton url={postUrl} className="mx-3">
          <span>Hatena</span>
        </HatenaShareButton>
        <FacebookShareButton title={postTitle} url={postUrl} className="mx-3">
          <span>Facebook</span>
        </FacebookShareButton>
        <PocketShareButton url={postUrl} className="mx-3">
          <span>Pocket</span>
        </PocketShareButton>
      </div>
    </div>
  )
}

export default SocialShare
