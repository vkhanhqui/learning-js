const RepoDTO = {};

RepoDTO.toRepo = (repo) => {
    if (!repo) return null;
    return {
        name: repo.name,
        full_name: repo.full_name,
        owner: [
            repo.owner.login,
            repo.owner.type
        ],
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        default_branch: repo.default_branch
    };
};

RepoDTO.toRepoDtoList = (repos) => {
    if (!repos) return [];
    return repos.map((repo) => RepoDTO.toRepo(repo));
};

module.exports=RepoDTO;