import { Twemoji } from 'react-emoji-render'
import {
  FacebookShareButton,
  HatenaShareButton,
  PocketShareButton,
  TwitterShareButton,
} from 'react-share'

const SocialShare = ({ postUrl, postTitle }: { postUrl: string; postTitle: string }) => {
  return (
    <div className=" text-center">
      <p className="flex justify-center items-center mb-6">
        <Twemoji text="📎" />
        <span className="ml-1 text-lg tracking-widest">Social Share</span>
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <TwitterShareButton url={postUrl} className="mx-3">
          <span className="hover:underline">Twitter</span>
        </TwitterShareButton>
        <HatenaShareButton url={postUrl} className="mx-3">
          <span className="hover:underline">Hatena</span>
        </HatenaShareButton>
        <FacebookShareButton title={postTitle} url={postUrl} className="mx-3">
          <span className="hover:underline">Facebook</span>
        </FacebookShareButton>
        <PocketShareButton url={postUrl} className="mx-3">
          <span className="hover:underline">Pocket</span>
        </PocketShareButton>
      </div>
    </div>
  )
}

export default SocialShare
