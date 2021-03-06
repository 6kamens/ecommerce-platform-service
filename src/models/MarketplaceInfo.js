module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'MarketplaceInfo', {
            marketplaceId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                field: 'marketplace_id'
            },
            marketName: {
                type: DataTypes.STRING(250),
                field:'market_name'
            },
            preDescription: {
                type: DataTypes.STRING(200)
            },
            description: {
                type: DataTypes.STRING(2000)
            },
            mobile: {
                type: DataTypes.STRING(15)
            },
            email: {
                type: DataTypes.STRING(100)
            },
            latitude: {
                type: DataTypes.STRING(25)
            },
            longtitude: {
                type: DataTypes.STRING(25)
            },
            profileImagePath: {
                type: DataTypes.STRING(1000),
                field:'profile_image_path'
            },
            backgroundImagePath: {
                type: DataTypes.STRING(1000),
                field:'background_image_path'
            },
            order: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                field:'is_active',
                defaultValue: true
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                field:'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field:'updated_at:'
            }
        }, {
            tableName: 'marketplace_info',
            timestamps: false

        }
    )

    model.associate = models => {
        model.hasMany(models.ProductInfo, {
            foreignKey: 'marketplace_id'
        });
    }


    return model;
}