using System;

namespace CatFlix.Posts
{
	public sealed class Post
	{
		public string Username { get; set; }
		public DateTime CreatedAt { get; set; }
		public string Status { get; set; }
		public string ImageUrl { get; set; }
		public string AvatarUrl { get; set; }
	}
}