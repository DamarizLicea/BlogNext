
import getPostMetaData from '@/component/getPostMetaData';
import PostPreview from '@/component/PostPreview';


const Homepages = () => {
  const postsData = getPostMetaData();
  const postPreview = postsData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
  <div>
    {postPreview}
    </div>

  );
};

export default Homepages;