using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Database.Entities;

[Table("users", Schema = "master")]
[Index("Email", Name = "users_email_key", IsUnique = true)]
public partial class User
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("blob_id")]
    public Guid? BlobId { get; set; }

    [Column("email")]
    public string Email { get; set; } = null!;

    [Column("password")]
    public string Password { get; set; } = null!;

    [Column("created")]
    public DateTime Created { get; set; }

    [Column("modified")]
    public DateTime Modified { get; set; }

    [ForeignKey("BlobId")]
    [InverseProperty("Users")]
    public virtual Blob? Blob { get; set; }
}
