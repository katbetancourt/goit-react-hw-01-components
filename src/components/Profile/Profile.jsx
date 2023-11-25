import PropTypes from 'prop-types';
import {
  ProfileBackground,
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileName,
  ProfileContact,
  ProfileMetrics,
  Followers,
  Value,
  Views,
  Likes,
} from './Profile.styles';

const Profile = ({ username, tag, stats, location, avatar }) => {
    return (
      <ProfileBackground>
        <ProfileContainer>
          <ProfileDescription>
            <ProfileImage src={avatar} />
            <ProfileName>{username}</ProfileName>
            <ProfileContact class="tag">{tag}</ProfileContact>
            <ProfileContact class="location">{location}</ProfileContact>

            <ProfileMetrics>
              <Followers>
                <span class="followers">Followers</span>
                <Value class="Value">{stats.followers}</Value>
              </Followers>
              <Views>
                <span class="views">Views</span>
                <Value class="Value">{stats.views}</Value>
              </Views>
              <Likes>
                <span class="likes">Likes</span>
                <Value class="Value">{stats.likes}</Value>
              </Likes>
            </ProfileMetrics>
          </ProfileDescription>
        </ProfileContainer>
      </ProfileBackground>
    );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
