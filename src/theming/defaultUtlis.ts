const defaultUtlis ={
    m: (value: unknown) => ({
        margin: value,
      }),
      mt: (value: unknown) => ({
        marginTop: value,
      }),
      mr: (value: unknown) => ({
        marginRight: value,
      }),
      mb: (value: unknown) => ({
        marginBottom: value,
      }),
      ml: (value: unknown) => ({
        marginLeft: value,
      }),
      mx: (value: unknown) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: unknown) => ({
        marginTop: value,
        marginBottom: value,
      }),

      p: (value: unknown) => ({
        padding: value,
      }),
      pt: (value: unknown) => ({
        paddingTop: value,
      }),
      pr: (value: unknown) => ({
        paddingRight: value,
      }),
      pb: (value: unknown) => ({
        paddingBottom: value,
      }),
      pl: (value: unknown) => ({
        paddingLeft: value,
      }),
      
      br: (value: unknown) => ({
        borderRadius: value,
      }),
      border: (value: unknown) => ({
        border: value,
      }),
      ft: (value: unknown) => ({
        fontSize: value,
      }),
      bg: (value: unknown) => ({
        backgroundColor: value,
      }),
      linearGradient: (value:unknown) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
      fs: (value: unknown) => ({
        fontStyle: value,
      }),
      display: (value: unknown) => ({
        display: value,
       
      }),
      justifyContent: (value: unknown) => ({
        
        justifyContent:value,
      }),
};

export default defaultUtlis;