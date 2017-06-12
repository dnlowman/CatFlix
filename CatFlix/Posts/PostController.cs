using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CatFlix.Posts
{
	public class PostController : ApiController
    {
		public HttpResponseMessage Get()
		{
			var posts = new List<Post>();

			posts.Add(new Post
			{
				Username = "username",
				AvatarUrl = "avatar",
				Status = "Eating lunch",
				CreatedAt = DateTime.Now,
				ImageUrl = "sss"
			});


			posts.Add(new Post
			{
				Username = "username",
				AvatarUrl = "avatar",
				Status = "Eating lunch",
				CreatedAt = DateTime.Now,
				ImageUrl = "sss"
			});

			return Request.CreateResponse(HttpStatusCode.OK, posts);
		}
		public HttpResponseMessage Post(Post post)
		{
			return Request.CreateResponse(HttpStatusCode.Created, post);
		}

    }
}
