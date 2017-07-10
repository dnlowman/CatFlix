using CatFlix.Posts;
using System;
using System.Collections.Generic;
using System.Net;
using Xunit;

namespace CatFlix.Tests
{
    public class PostControllerTests
    {
		[Fact]
		public void GetShouldReturnAListOfPostObjects()
		{
			// Given
			var controller = new PostController();
			controller.Request = new System.Net.Http.HttpRequestMessage();
			controller.Configuration = new System.Web.Http.HttpConfiguration();
			// When
			var result = controller.Get();

			// Then
			Assert.Equal(HttpStatusCode.OK, result.StatusCode);
		}

		[Fact]
		public void PostShouldAcceptAPostObjectAndReturnIt()
		{
			// Given
			var controller = new PostController();
			controller.Request = new System.Net.Http.HttpRequestMessage();
			controller.Configuration = new System.Web.Http.HttpConfiguration();
			var post = new Post
			{
				Username = "username",
				AvatarUrl = "avatar",
				Status = "Eating lunch",
				CreatedAt = DateTime.Now,
				ImageUrl = "sss"
			};
			// When
			var result = controller.Post(post);

			// Then
			Assert.Equal(HttpStatusCode.Created, result.StatusCode);
		}
	}
}
