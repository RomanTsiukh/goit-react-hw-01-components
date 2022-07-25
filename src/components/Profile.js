export default function Profile(props) {
    console.log(props)
    const { link, usname, ustag, locat, folowers, views, likes } = props
    return (
    <div class="profile">
    <div class="description">
      <img
        src={link}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{usname}</p>
      <p class="tag">@{ustag}</p>
      <p class="location">{locat}</p>
    </div>
    
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{folowers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
    </div>
    );
  }